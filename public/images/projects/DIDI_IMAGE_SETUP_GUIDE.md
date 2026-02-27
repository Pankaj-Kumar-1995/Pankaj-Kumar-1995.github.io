# DiDi Project Images - Setup Guide

## Image Filenames & Locations

Save the provided images to `/public/images/projects/` with these exact filenames:

### 1. **didi-cover.jpg** (REQUIRED)
- **From:** "SUSTAINABLE SOLUTIONS" title slide
- **Purpose:** Project cover image displayed on project grid
- **Used in:** Projects.jsx grid thumbnail

### 2. **didi-wicked-problem.jpg**
- **From:** "WICKED PROBLEM" diagram slide
- **Purpose:** Visual explanation of accessibility challenges
- **Size:** Full-width diagram showing all 5 problem areas

### 3. **didi-research-findings.jpg**
- **From:** "WHAT DOES RESEARCH SAY..." slide
- **Purpose:** Key research statistics with icons
- **Shows:** Service animal discrimination (36%), wheelchair accessibility (14%)

### 4. **didi-childseat-solution.jpg**
- **From:** "SOLUTION for Childseat Availability - Comparison with competitor"
- **Purpose:** Visual comparison with Uber Child Tier + app mockup
- **Shows:** Key differences in UX and availability

### 5. **didi-care-solution.jpg**
- **From:** "SOLUTION for Wheelchair Accessibility - DidiCare"
- **Purpose:** DidiCare tier features and wait times comparison
- **Shows:** App interface and UK Uber Assist wait times table

### 6. **didi-companion-solution.jpg**
- **From:** "SOLUTION for Service Dogs - DidiCompanion"
- **Purpose:** Service dogs tier solution overview
- **Shows:** Pet-friendly badge, registration requirement, medical verification

### 7. **didi-companion-compliance.jpg**
- **From:** "SOLUTION for Service Dogs - DidiCompanion" (legal definition slide)
- **Purpose:** Regulatory and compliance information
- **Shows:** Dog and Cat Management Act 1925 and DDA compliance requirements

## How to Use These Images

1. Save each image to `/public/images/projects/` folder
2. Use filenames exactly as specified above
3. Images will automatically display in:
   - Project detail page hero/gallery section
   - Solution explanation sections
   - Compliance and research sections

## Images Referenced in Project Details Page

The ProjectDetails.jsx component will display:
- Cover image (didi-cover.jpg) as main hero
- Wicked problem diagram in business problem section
- Research findings with statistics
- Solution visuals (childseat, care, companion)
- Compliance documentation
