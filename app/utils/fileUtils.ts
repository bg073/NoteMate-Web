import fs from 'fs';
import path from 'path';

export async function readPrivacyPolicy(): Promise<string> {
  try {
    const filePath = path.join(process.cwd(), 'Privacy Policy for NoteMateX 1.0.0 .txt');
    const fileContent = fs.readFileSync(filePath, 'utf8');
    return fileContent;
  } catch (error) {
    console.error('Error reading privacy policy file:', error);
    return 'Privacy policy content could not be loaded. Please contact us for more information.';
  }
} 