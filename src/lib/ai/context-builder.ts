import { personalData } from '@/data/personal';
import { projectsData } from '@/data/projects';
import { experienceData } from '@/data/experience';
import { skillsData } from '@/data/skills';
import { certificationsData } from '@/data/certifications';
import { socialLinksData } from '@/data/social-links';

export function buildPortfolioContext(): string {
  let context = '';

  // Personal Info
  context += '=== PERSONAL ===\n';
  context += `Name: ${personalData.name}\n`;
  context += `Role: ${personalData.role}\n`;
  context += `Location: ${personalData.location}\n`;
  context += `Availability: ${personalData.availability}\n`;
  context += `Bio: ${personalData.bio.join(' ')}\n\n`;

  // Projects
  context += '=== PROJECTS ===\n';
  projectsData.forEach((project, index) => {
    context += `${index + 1}. ${project.title}\n`;
    context += `   Technologies: ${project.technologies.join(', ')}\n`;
    context += `   Categories: ${project.categories.join(', ')} | Status: ${project.status} | Featured: ${project.featured ? 'Yes' : 'No'}\n`;
    context += `   Description: ${project.longDescription}\n`;
    if (project.problem) context += `   Problem: ${project.problem}\n`;
    if (project.solution) context += `   Solution: ${project.solution}\n`;
    if (project.features) context += `   Key Features: ${project.features.join('; ')}\n`;
    if (project.architecture) context += `   Architecture: ${project.architecture}\n`;
    context += '\n';
  });

  // Experience
  context += '=== EXPERIENCE ===\n';
  experienceData.forEach(exp => {
    const end = exp.isCurrent ? 'Present' : exp.endDate;
    context += `${exp.role} @ ${exp.company} (${exp.startDate} - ${end}, ${exp.location})\n`;
    context += `   ${exp.description.join(' ')}\n`;
    if (exp.achievements) context += `   Achievements: ${exp.achievements.join('; ')}\n`;
    context += `   Technologies: ${exp.technologies.join(', ')}\n\n`;
  });

  // Skills
  context += '=== SKILLS ===\n';
  skillsData.forEach(category => {
    const primary = category.skills.filter(s => s.tier === 'primary').map(s => s.name);
    const proficient = category.skills.filter(s => s.tier === 'proficient').map(s => s.name);
    const familiar = category.skills.filter(s => s.tier === 'familiar').map(s => s.name);
    
    if (primary.length) context += `${category.name} (Primary): ${primary.join(', ')}\n`;
    if (proficient.length) context += `${category.name} (Proficient): ${proficient.join(', ')}\n`;
    if (familiar.length) context += `${category.name} (Familiar): ${familiar.join(', ')}\n`;
  });
  context += '\n';

  // Certifications
  context += '=== CERTIFICATIONS ===\n';
  certificationsData.forEach(cert => {
    context += `- ${cert.name} (${cert.issuer}, ${cert.issuedDate})\n`;
    context += `  Verified skills: ${cert.skillsVerified.join(', ')}\n`;
  });
  context += '\n';

  // Contact
  context += '=== CONTACT ===\n';
  socialLinksData.forEach(link => {
    context += `${link.name}: ${link.url}\n`;
  });

  return context;
}
