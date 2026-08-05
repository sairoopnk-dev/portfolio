import { Certification } from '@/types';

export const certificationsData: Certification[] = [
  {
    id: "cert-1",
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services (AWS)",
    issuedDate: "2024-10",
    credentialId: "AWS-SA-12345",
    credentialUrl: "https://aws.amazon.com/verification",
    skillsVerified: ["Cloud Architecture", "Amazon EC2", "Amazon S3", "IAM", "Serverless"]
  },
  {
    id: "cert-2",
    name: "Meta Front-End Developer Professional Certificate",
    issuer: "Meta (Coursera)",
    issuedDate: "2024-03",
    credentialId: "META-FE-67890",
    credentialUrl: "https://coursera.org/verify",
    skillsVerified: ["React", "JavaScript ES6+", "HTML5/CSS3", "UX Principles", "Version Control"]
  },
  {
    id: "cert-3",
    name: "TensorFlow Developer Certificate",
    issuer: "Google",
    issuedDate: "2023-11",
    credentialId: "TF-DEV-54321",
    credentialUrl: "https://tensorflow.org/certificate",
    skillsVerified: ["PyTorch", "TensorFlow", "Computer Vision", "NLP", "Neural Networks"]
  }
];
