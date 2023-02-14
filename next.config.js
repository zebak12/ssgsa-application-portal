require('dotenv').config()

module.exports = {
  env: {
    EMAILJS_SERVICE_ID: process.env.EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID: process.env.EMAILJS_TEMPLATE_ID,
    EMAILJS_USER_ID: process.env.EMAILJS_USER_ID,
    EMAILJS_REVIEWER_TEMPLATE_ID: process.env.EMAILJS_REVIEWER_TEMPLATE_ID,
    EMAILJS_INTERVIEWER_TEMPLATE_ID:
      process.env.EMAILJS_INTERVIEWER_TEMPLATE_ID,
    NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY:
      process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN:
      process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID:
      process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_URL:
      process.env.NEXT_PUBLIC_FIREBASE_STORAGE_URL,
    NEXT_PUBLIC_QUESTION_1: process.env.NEXT_PUBLIC_QUESTION_1,
    NEXT_PUBLIC_QUESTION_2: process.env.NEXT_PUBLIC_QUESTION_2,
    NEXT_PUBLIC_QUESTION_3: process.env.NEXT_PUBLIC_QUESTION_3,
    NEXT_PUBLIC_QUESTION_4: process.env.NEXT_PUBLIC_QUESTION_4,
    NEXT_PUBLIC_QUESTION_5: process.env.NEXT_PUBLIC_QUESTION_5,
    NEXT_PUBLIC_APPLICATION_START_DATE:
      process.env.NEXT_PUBLIC_APPLICATION_START_DATE,
    NEXT_PUBLIC_APPLICATION_END_DATE:
      process.env.NEXT_PUBLIC_APPLICATION_END_DATE,
    NEXT_PUBLIC_REVIEWER_RUBRIC_URL:
      process.env.NEXT_PUBLIC_REVIEWER_RUBRIC_URL,
    NEXT_PUBLIC_REVIEW_STEP1_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP1_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_STEP1_INSTRUCTION1:
      process.env.NEXT_PUBLIC_REVIEW_STEP1_INSTRUCTION1,
    NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION1:
      process.env.NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION1,
    NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION2:
      process.env.NEXT_PUBLIC_REVIEW_STEP2_INSTRUCTION2,
    NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION1:
      process.env.NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION1,
    NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION2:
      process.env.NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION2,
    NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION3:
      process.env.NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION3,
    NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION4:
      process.env.NEXT_PUBLIC_REVIEW_STEP3_INSTRUCTION4,
    NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION1:
      process.env.NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION1,
    NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION2:
      process.env.NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION2,
    NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION3:
      process.env.NEXT_PUBLIC_REVIEW_STEP4_INSTRUCTION3,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION1:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION1,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION2:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION2,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION3:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION3,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION4:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION4,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION5:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION5,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION6:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION6,
    NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION7:
      process.env.NEXT_PUBLIC_REVIEW_STEP5_INSTRUCTION7,
    NEXT_PUBLIC_REVIEW_STEP6_INSTRUCTION:
      process.env.NEXT_PUBLIC_REVIEW_STEP6_INSTRUCTION,
    NEXT_PUBLIC_REVIEW_ACADEMIC_MAX_MARKS:
      process.env.NEXT_PUBLIC_REVIEW_ACADEMIC_MAX_MARKS,
    NEXT_PUBLIC_REVIEW_CURRICULAR_MAX_MARKS:
      process.env.NEXT_PUBLIC_REVIEW_CURRICULAR_MAX_MARKS,
    NEXT_PUBLIC_REVIEW_EXTRACURRICULAR_MAX_MARKS:
      process.env.NEXT_PUBLIC_REVIEW_EXTRACURRICULAR_MAX_MARKS,
    NEXT_PUBLIC_REVIEW_SOP_MAX_MARKS:
      process.env.NEXT_PUBLIC_REVIEW_SOP_MAX_MARKS,
    NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_A:
      process.env.NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_A,
    NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_B:
      process.env.NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_B,
    NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_C:
      process.env.NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_C,
    NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_D:
      process.env.NEXT_PUBLIC_INTERVIEW_MARKS_INDEX_D,
    NEXT_PUBLIC_INTERVIEW_INDEX_A_MAX_MARKS:
      process.env.NEXT_PUBLIC_INTERVIEW_INDEX_A_MAX_MARKS,
    NEXT_PUBLIC_INTERVIEW_INDEX_B_MAX_MARKS:
      process.env.NEXT_PUBLIC_INTERVIEW_INDEX_B_MAX_MARKS,
    NEXT_PUBLIC_INTERVIEW_INDEX_C_MAX_MARKS:
      process.env.NEXT_PUBLIC_INTERVIEW_INDEX_C_MAX_MARKS,
    NEXT_PUBLIC_INTERVIEW_INDEX_D_MAX_MARKS:
      process.env.NEXT_PUBLIC_INTERVIEW_INDEX_D_MAX_MARKS,
  },
  reactStrictMode: true,
  generateBuildId: () => 'build',
}
