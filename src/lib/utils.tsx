import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}

/**
 * Maps organization names to their corresponding logo files
 * @param organization - The organization name from speaker/organizer data
 * @returns The path to the logo file, or null if no match found
 */
export function getOrganizationLogo(organization: string): string | null {
    if (!organization) return null;
    
    const orgLower = organization.toLowerCase();
    
    // Map organization names to logo files
    const logoMap: Record<string, string> = {
        "csiro": "/speaker_oc_logo/csiro.png",
        "oracle": "/speaker_oc_logo/oracle.png",
        "transurban": "/speaker_oc_logo/transurban.png",
        "atlassian": "/speaker_oc_logo/atlassian.png",
        "huawei": "/speaker_oc_logo/huawei.png",
        "victoria university": "/speaker_oc_logo/victoria_university.jpeg",
        "monash university": "/speaker_oc_logo/monash-university.png",
        "deakin university": "/speaker_oc_logo/deakin.png",
        "university of otago": "/speaker_oc_logo/uni_otago.jpeg",
        "macquarie university": "/speaker_oc_logo/macquarie.png",
        "university of new south wales": "/speaker_oc_logo/unsw.png",
        "unsw": "/speaker_oc_logo/unsw.png",
        "nbn": "/speaker_oc_logo/nbn.png",
        "university of queensland": "/speaker_oc_logo/uni_of_queensland.jpeg",
        "university of auckland": "/speaker_oc_logo/auckland.png",
        "rmit university": "/speaker_oc_logo/rmit.png",
        "rmit": "/speaker_oc_logo/rmit.png",
        "university of melbourne": "/speaker_oc_logo/university-of-melbourne.png",
        "the university of melbourne": "/speaker_oc_logo/university-of-melbourne.png",
    };
    
    // Check for exact matches first
    for (const [key, logo] of Object.entries(logoMap)) {
        if (orgLower.includes(key)) {
            return logo;
        }
    }
    
    return null;
}