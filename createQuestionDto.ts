interface createQuestionDto {
  id: string;
  question_type: string;
  instruction: string;
  language_tag: string;
  level: string;
  question: string;
  image_url: string;
  audio_url: string;
  answer: string;
  option: IOption[];
  uploadDate: "";
  uploadedBy: string;
}

interface IOption {
  id: string;
  question_id: string;
  text: string;
  audio?: string;
  image?: string;
}
