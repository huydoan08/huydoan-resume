import { FRONTEND_OTHER_SKILLS } from '@/lib/data/FRONTEND_SKILLS/FRONTEND_OTHER_SKILLS'
import { NEXT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/NEXT_SKILLS'
import { REACT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/REACT_SKILLS'
import { JAVASCRIPT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/JAVASCRIPT_SKILLS'
import { ISkill } from '@/lib/types/ISkill'
import { TYPESCRIPT_SKILLS } from '@/lib/data/FRONTEND_SKILLS/TYPESCRIPT_SKILLS'

export const FRONTEND_SKILLS: ISkill = {  
  name: 'Frontend',
  since: 2021,
  level: 85,
  description: 'I have been working with React since 2022. Created multiple applications and websites. With a strong foundation in UI/UX design, I enjoy solving front-end challenges and creating exceptional user experiences.',
  subSkills: [
    REACT_SKILLS,
    TYPESCRIPT_SKILLS,
    JAVASCRIPT_SKILLS,
    NEXT_SKILLS,
    FRONTEND_OTHER_SKILLS,
  ]
}


