import { jsPDF } from 'jspdf';
import type {
  CertificationsCollectionItem,
  CoursesCollectionItem,
  EducationCollectionItem,
  ExperienceCollectionItem,
  PersonalHighlightsCollectionItem,
  PersonalInfoCollectionItem,
  ProjectsCollectionItem,
  ReferencesCollectionItem,
  RoboticsProjectsCollectionItem,
  SkillsCollectionItem,
} from '@nuxt/content';
import resumeConfig, { type ResumeConfig } from '@@/resume.config';

// Page constants
const PAGE_WIDTH = 210;
const PAGE_HEIGHT = 297;
const MARGIN_LEFT = 15;
const MARGIN_RIGHT = 15;
const MARGIN_TOP = 15;
const MARGIN_BOTTOM = 15;
const CONTENT_WIDTH = PAGE_WIDTH - MARGIN_LEFT - MARGIN_RIGHT;

// Font sizes
const FONT_SIZE_NAME = 16;
const FONT_SIZE_SUBTITLE = 10;
const FONT_SIZE_SECTION_TITLE = 12;
const FONT_SIZE_BODY = 9.5;
const FONT_SIZE_SMALL = 8.5;

// Spacing
const LINE_HEIGHT = 4.5;
const SECTION_GAP = 6;
const ITEM_GAP = 2;

interface PdfContext {
  doc: jsPDF;
  y: number;
  config: ResumeConfig;
}

interface DrawTextOptions {
  bold?: boolean;
  italic?: boolean;
  fontSize?: number;
  indent?: number;
  maxWidth?: number;
}

interface InlineLeftRightOptions {
  bold?: boolean;
  fontSize?: number;
}

interface ResumeData {
  personalInfo: PersonalInfoCollectionItem;
  skills: SkillsCollectionItem;
  experience: ExperienceCollectionItem[];
  education: EducationCollectionItem[];
  projects: ProjectsCollectionItem[];
  courses: CoursesCollectionItem[];
  certifications: CertificationsCollectionItem[];
  roboticsProjects: RoboticsProjectsCollectionItem[];
  personalHighlights: PersonalHighlightsCollectionItem[];
  references: ReferencesCollectionItem[];
}

type SectionKey =
  | 'objective'
  | 'education'
  | 'experience'
  | 'skills'
  | 'projects'
  | 'courses'
  | 'honorsAndAwards'
  | 'personalHighlights'
  | 'certifications'
  | 'references';

type SectionRenderer = (ctx: PdfContext, data: ResumeData) => void;

function stripHtml(text: string): string {
  return text
    .replace(/<[^>]+>/g, '')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
}

function checkPageBreak(ctx: PdfContext, needed: number): void {
  if (ctx.y + needed > PAGE_HEIGHT - MARGIN_BOTTOM) {
    ctx.doc.addPage();
    ctx.y = MARGIN_TOP;
  }
}

function drawSectionTitle(ctx: PdfContext, title: string): void {
  checkPageBreak(ctx, 12);
  ctx.y += SECTION_GAP;
  ctx.doc.setFont('helvetica', 'bold');
  ctx.doc.setFontSize(FONT_SIZE_SECTION_TITLE);
  ctx.doc.text(title.toUpperCase(), MARGIN_LEFT, ctx.y);
  ctx.y += 1.5;
  ctx.doc.setDrawColor(60, 60, 60);
  ctx.doc.setLineWidth(0.4);
  ctx.doc.line(MARGIN_LEFT, ctx.y, PAGE_WIDTH - MARGIN_RIGHT, ctx.y);
  ctx.y += 4;
}

function drawText(
  ctx: PdfContext,
  text: string,
  options: DrawTextOptions = {},
): void {
  const {
    bold = false,
    italic = false,
    fontSize = FONT_SIZE_BODY,
    indent = 0,
    maxWidth,
  } = options;

  const style =
    bold && italic
      ? 'bolditalic'
      : bold
        ? 'bold'
        : italic
          ? 'italic'
          : 'normal';
  ctx.doc.setFont('helvetica', style);
  ctx.doc.setFontSize(fontSize);

  const width = maxWidth || CONTENT_WIDTH - indent;
  const lines = ctx.doc.splitTextToSize(stripHtml(text), width);
  const totalHeight = lines.length * LINE_HEIGHT;

  checkPageBreak(ctx, totalHeight);

  for (const line of lines) {
    ctx.doc.text(line, MARGIN_LEFT + indent, ctx.y);
    ctx.y += LINE_HEIGHT;
  }
}

function drawBullet(ctx: PdfContext, text: string, indent: number = 6): void {
  ctx.doc.setFont('helvetica', 'normal');
  ctx.doc.setFontSize(FONT_SIZE_BODY);

  const bulletX = MARGIN_LEFT + indent;
  const textX = bulletX + 4;
  const width = CONTENT_WIDTH - indent - 4;
  const lines = ctx.doc.splitTextToSize(stripHtml(text), width);
  const totalHeight = lines.length * LINE_HEIGHT;

  checkPageBreak(ctx, totalHeight);

  ctx.doc.text('\u2022', bulletX, ctx.y);
  for (let i = 0; i < lines.length; i++) {
    ctx.doc.text(lines[i], textX, ctx.y);
    ctx.y += LINE_HEIGHT;
  }
}

function drawInlineLeftRight(
  ctx: PdfContext,
  left: string,
  right: string,
  options: InlineLeftRightOptions = {},
): void {
  const { bold = false, fontSize = FONT_SIZE_BODY } = options;
  const style = bold ? 'bold' : 'normal';
  ctx.doc.setFont('helvetica', style);
  ctx.doc.setFontSize(fontSize);
  checkPageBreak(ctx, LINE_HEIGHT);
  ctx.doc.text(left, MARGIN_LEFT, ctx.y);
  ctx.doc.text(right, PAGE_WIDTH - MARGIN_RIGHT, ctx.y, { align: 'right' });
  ctx.y += LINE_HEIGHT;
}

// --- Section renderers ---

function renderHeader(
  ctx: PdfContext,
  personalInfo: PersonalInfoCollectionItem,
): void {
  const { header } = ctx.config;

  // Name
  ctx.doc.setFont('helvetica', 'bold');
  ctx.doc.setFontSize(FONT_SIZE_NAME);
  ctx.doc.text(header.name, PAGE_WIDTH / 2, ctx.y, { align: 'center' });
  ctx.y += 6;

  // Title
  ctx.doc.setFont('helvetica', 'normal');
  ctx.doc.setFontSize(FONT_SIZE_SUBTITLE);
  ctx.doc.text(header.title, PAGE_WIDTH / 2, ctx.y, { align: 'center' });
  ctx.y += 5;

  // Contact line
  ctx.doc.setFontSize(FONT_SIZE_SMALL);
  const contactParts = [
    personalInfo.personalInfo.address,
    personalInfo.contactInfo.phone,
  ];
  ctx.doc.text(contactParts.join(' | '), PAGE_WIDTH / 2, ctx.y, {
    align: 'center',
  });
  ctx.y += 4;

  // Links line
  const linkParts = [header.website, personalInfo.contactInfo.email];
  if (personalInfo.accounts.linkedin) {
    linkParts.push(personalInfo.accounts.linkedin.replace('https://www.', ''));
  }
  if (personalInfo.accounts.github) {
    linkParts.push(personalInfo.accounts.github.replace('https://', ''));
  }
  ctx.doc.text(linkParts.join(' | '), PAGE_WIDTH / 2, ctx.y, {
    align: 'center',
  });
  ctx.y += 3;
}

function renderObjective(
  ctx: PdfContext,
  personalInfo: PersonalInfoCollectionItem,
): void {
  drawSectionTitle(ctx, 'Objective');
  drawText(ctx, personalInfo.objective);
}

function renderEducation(
  ctx: PdfContext,
  education: EducationCollectionItem[],
): void {
  drawSectionTitle(ctx, 'Education');
  for (const edu of education) {
    const place = edu.university || edu.institution || edu.school || '';
    const location = edu.location ? `, ${edu.location}` : '';
    const dateStr = `${edu.startYear} - ${edu.endYear}`;

    drawInlineLeftRight(ctx, `${edu.degree}`, dateStr, { bold: true });
    if (place) {
      drawText(ctx, `${place}${location}`, { italic: true });
    }
    ctx.y += ITEM_GAP;
  }
}

function renderExperience(
  ctx: PdfContext,
  experience: ExperienceCollectionItem[],
): void {
  const expConfig = ctx.config.sections.experience;
  drawSectionTitle(ctx, 'Work Experience');

  for (const exp of experience) {
    const dateStr = `${exp.startDate} - ${exp.endDate}`;
    const remotely = exp.endDate === 'present' ? ' (Remotely)' : '';

    drawInlineLeftRight(ctx, `${exp.position}${remotely}`, dateStr, {
      bold: true,
    });
    const companyLine =
      exp.company +
      (exp.website ? ` - ${exp.website.replace('https://', '')}` : '');
    drawText(ctx, companyLine, { italic: true });

    const achievements =
      expConfig.maxAchievementsPerRole > 0
        ? exp.achievements.slice(0, expConfig.maxAchievementsPerRole)
        : exp.achievements;

    for (const achievement of achievements) {
      drawBullet(ctx, achievement);
    }
    ctx.y += ITEM_GAP;
  }
}

function renderSkills(ctx: PdfContext, skills: SkillsCollectionItem): void {
  const skillsConfig = ctx.config.sections.skills;
  drawSectionTitle(ctx, 'Skills');

  // Hard skills grouped by categories
  for (const [category, skillNames] of Object.entries(
    skillsConfig.categories,
  )) {
    const line = `${category}: ${skillNames.join(', ')}.`;
    drawBullet(ctx, line);
  }

  // Soft skills
  if (skills.soft && skills.soft.length > 0) {
    drawBullet(ctx, `Soft Skills: ${skills.soft.join(', ')}.`);
  }
}

function renderProjects(
  ctx: PdfContext,
  projects: ProjectsCollectionItem[],
): void {
  const projConfig = ctx.config.sections.projects;
  drawSectionTitle(ctx, 'Projects');

  const items =
    projConfig.maxProjects > 0
      ? projects.slice(0, projConfig.maxProjects)
      : projects;

  for (const proj of items) {
    drawInlineLeftRight(ctx, proj.name, String(proj.year), { bold: true });
    drawText(ctx, proj.type, { italic: true, fontSize: FONT_SIZE_SMALL });

    if (proj.url) {
      drawBullet(ctx, `URL: ${proj.url.replace('https://', '')}`);
    }
    drawBullet(ctx, `Tech Stack: ${proj.stack.join(', ')}`);
    ctx.y += ITEM_GAP;
  }
}

function renderCourses(
  ctx: PdfContext,
  courses: CoursesCollectionItem[],
): void {
  drawSectionTitle(ctx, 'Courses');
  for (const course of courses) {
    drawInlineLeftRight(ctx, course.title, String(course.year), { bold: true });
    drawText(ctx, course.host, { italic: true, fontSize: FONT_SIZE_SMALL });
    ctx.y += ITEM_GAP;
  }
}

function renderHonorsAndAwards(
  ctx: PdfContext,
  roboticsProjects: RoboticsProjectsCollectionItem[],
): void {
  drawSectionTitle(ctx, 'Honors & Awards');
  for (const rp of roboticsProjects) {
    const scopeLabel =
      rp.scope === 'Local'
        ? '(Local)'
        : rp.scope === 'Global'
          ? '(Global)'
          : `(${rp.scope})`;
    drawInlineLeftRight(
      ctx,
      `${rp.title} Winner ${scopeLabel}`,
      String(rp.year),
      { bold: true },
    );
    drawText(ctx, `${rp.donor}`, { italic: true, fontSize: FONT_SIZE_SMALL });
    drawText(ctx, rp.description, { fontSize: FONT_SIZE_SMALL });
    ctx.y += ITEM_GAP;
  }
}

function renderPersonalHighlights(
  ctx: PdfContext,
  highlights: PersonalHighlightsCollectionItem[],
): void {
  drawSectionTitle(ctx, 'Personal Projects & Experience');
  for (const h of highlights) {
    drawText(ctx, h.title, { bold: true });
    for (const achievement of h.achievements) {
      drawBullet(ctx, achievement);
    }
    ctx.y += ITEM_GAP;
  }
}

function renderCertifications(
  ctx: PdfContext,
  certifications: CertificationsCollectionItem[],
): void {
  drawSectionTitle(ctx, 'Certifications');
  for (const cert of certifications) {
    drawInlineLeftRight(ctx, cert.title, String(cert.year), { bold: false });
    drawText(ctx, cert.organization, {
      italic: true,
      fontSize: FONT_SIZE_SMALL,
    });
    ctx.y += ITEM_GAP;
  }
}

function renderReferences(
  ctx: PdfContext,
  references: ReferencesCollectionItem[],
): void {
  drawSectionTitle(ctx, 'References');
  for (const ref of references) {
    const contacts = ref.contacts || (ref.contact ? [ref.contact] : []);
    const contactStr = contacts.length > 0 ? `    ${contacts.join(' - ')}` : '';
    drawText(ctx, `${ref.name}${contactStr}`, { bold: true });
    drawBullet(ctx, `${ref.degree} - ${ref.location}`);
    drawBullet(ctx, ref.position);
    ctx.y += ITEM_GAP;
  }
}

// Section key -> renderer mapping
const sectionRenderers: Record<SectionKey, SectionRenderer> = {
  objective: (ctx, data) => renderObjective(ctx, data.personalInfo),
  education: (ctx, data) => renderEducation(ctx, data.education),
  experience: (ctx, data) => renderExperience(ctx, data.experience),
  skills: (ctx, data) => renderSkills(ctx, data.skills),
  projects: (ctx, data) => renderProjects(ctx, data.projects),
  courses: (ctx, data) => renderCourses(ctx, data.courses),
  honorsAndAwards: (ctx, data) =>
    renderHonorsAndAwards(ctx, data.roboticsProjects),
  personalHighlights: (ctx, data) =>
    renderPersonalHighlights(ctx, data.personalHighlights),
  certifications: (ctx, data) => renderCertifications(ctx, data.certifications),
  references: (ctx, data) => renderReferences(ctx, data.references),
};

export function useResumeGenerator() {
  const isGenerating = ref(false);

  async function generateResume(): Promise<void> {
    isGenerating.value = true;

    try {
      // Fetch all content data in parallel
      const [
        personalInfo,
        skills,
        experience,
        education,
        projects,
        courses,
        certifications,
        roboticsProjects,
        personalHighlights,
        references,
      ] = await Promise.all([
        queryCollection('personalInfo').first(),
        queryCollection('skills').first(),
        queryCollection('experience').all(),
        queryCollection('education').all(),
        queryCollection('projects').all(),
        queryCollection('courses').all(),
        queryCollection('certifications').all(),
        queryCollection('roboticsProjects').all(),
        queryCollection('personalHighlights').all(),
        queryCollection('references').all(),
      ]);

      if (!personalInfo || !skills) {
        throw new Error('Required resume data is missing');
      }

      // Sort experience: most recent first (by file name prefix which encodes order)
      const sortedExperience = [...(experience || [])].reverse();
      // Sort education: by startYear descending
      const sortedEducation = [...(education || [])].sort(
        (a, b) => b.startYear - a.startYear,
      );
      // Sort projects: by year descending
      const sortedProjects = [...(projects || [])].sort(
        (a, b) => b.year - a.year,
      );
      // Sort courses: by year descending
      const sortedCourses = [...(courses || [])].sort(
        (a, b) => b.year - a.year,
      );
      // Sort certifications: by year descending
      const sortedCertifications = [...(certifications || [])].sort(
        (a, b) => b.year - a.year,
      );
      // Sort robotics projects: by year descending
      const sortedRoboticsProjects = [...(roboticsProjects || [])].sort(
        (a, b) => b.year - a.year,
      );

      const data: ResumeData = {
        personalInfo,
        skills,
        experience: sortedExperience,
        education: sortedEducation,
        projects: sortedProjects,
        courses: sortedCourses,
        certifications: sortedCertifications,
        roboticsProjects: sortedRoboticsProjects,
        personalHighlights: personalHighlights || [],
        references: references || [],
      };

      // Create PDF
      const doc = new jsPDF({ unit: 'mm', format: 'a4' });
      doc.setTextColor(30, 30, 30);

      const ctx: PdfContext = {
        doc,
        y: MARGIN_TOP,
        config: resumeConfig,
      };

      // Always render header first
      renderHeader(ctx, personalInfo);

      // Render sections in configured order
      for (const sectionKey of resumeConfig.sectionOrder as SectionKey[]) {
        const sectionConfig = resumeConfig.sections[sectionKey];
        if (!sectionConfig?.visible) continue;

        const renderer = sectionRenderers[sectionKey];
        if (renderer) {
          renderer(ctx, data);
        }
      }

      // Save the PDF
      doc.save(resumeConfig.fileName);
    } finally {
      isGenerating.value = false;
    }
  }

  return {
    generateResume,
    isGenerating,
  };
}
