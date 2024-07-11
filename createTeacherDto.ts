interface createTeacherDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
  role: string;
  languages_spoken: [];
  state: string;
  country: string;
  inetrests: [];
  work_experiance: string;
  about_me: string;
}

interface createStudentDto {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  date_of_birth: string;
}
