export interface AiModel {
  code: string
  title: string
  tagline: string
  icon: string
  accent: string
  x: number
  y: number
}

export const MODELS: AiModel[] = [
  { code: 'LLM', title: 'Large Language Model', tagline: 'توليد النصوص كلمة بكلمة', icon: 'Brain', accent: '#00F5B8', x: 90, y: 200 },
  { code: 'LCM', title: 'Large Concept Model', tagline: 'يفكر بالأفكار دفعة واحدة', icon: 'Sparkles', accent: '#00D2FF', x: 590, y: 200 },
  { code: 'LAM', title: 'Large Action Model', tagline: 'تنفيذ الأفعال والتحكم المباشر', icon: 'Workflow', accent: '#F59E0B', x: 590, y: 640 },
  { code: 'MoE', title: 'Mixture of Experts', tagline: 'راوتر ذكي للخبير المناسب', icon: 'Route', accent: '#8B5CF6', x: 90, y: 640 },
  { code: 'VLM', title: 'Vision Language Model', tagline: 'يجمع الصورة مع النص', icon: 'Eye', accent: '#00D2FF', x: 90, y: 1080 },
  { code: 'SLM', title: 'Small Language Model', tagline: 'مصغرة فائقة الكفاءة', icon: 'Cpu', accent: '#00F5B8', x: 590, y: 1080 },
  { code: 'MLM', title: 'Masked Language Model', tagline: 'سياق الجملة من الاتجاهين', icon: 'Braces', accent: '#8B5CF6', x: 90, y: 1520 },
  { code: 'SAM', title: 'Segment Anything Model', tagline: 'عزل وقص بدقة جراحية', icon: 'Scissors', accent: '#F59E0B', x: 590, y: 1520 },
]

export interface Cue {
  from: number
  to: number
  text: string
}

// Original 72-second design cues at 30fps, retimed to the recording by useTimelineFrame.
export const CUES: Cue[] = [
  { from: 0, to: 60, text: 'هل تعتقد أن الذكاء الاصطناعي' },
  { from: 60, to: 120, text: 'هو فقط شات جي بي تي؟' },
  { from: 120, to: 210, text: 'في الحقيقة، هناك ثمانية نماذج متخصصة' },
  { from: 210, to: 270, text: 'تحرك هذا العالم.' },
  { from: 270, to: 360, text: 'أولاً، الـ LLM، النماذج اللغوية الضخمة' },
  { from: 360, to: 420, text: 'لتوليد النصوص كلمة بكلمة.' },
  { from: 420, to: 480, text: 'وبجانبها، الـ LCM،' },
  { from: 480, to: 600, text: 'نموذج المفاهيم الذي يفكر على مستوى الأفكار والجمل' },
  { from: 600, to: 645, text: 'دفعة واحدة.' },
  { from: 645, to: 684, text: 'ثانياً،' },
  { from: 684, to: 735, text: 'عندما نحتاج أن ننتقل إلى الأفعال،' },
  { from: 735, to: 795, text: 'يأتي الـ LAM لتنفيذ المهام' },
  { from: 795, to: 855, text: 'والتحكم في التطبيقات.' },
  { from: 855, to: 915, text: 'ولتوفير الموارد بذكاء،' },
  { from: 915, to: 975, text: 'نموذج الـ MoE، راوتر ذكي' },
  { from: 975, to: 1050, text: 'يوجه كل سؤال للخبير المناسب فقط.' },
  { from: 1050, to: 1140, text: 'ثالثاً، نماذج الرؤية الـ VLM،' },
  { from: 1140, to: 1230, text: 'تجمع بين الصورة والنص لترى ما تشرحه لها.' },
  { from: 1230, to: 1350, text: 'أما إذا أردت تشغيل الذكاء على هاتفك بدون إنترنت،' },
  { from: 1350, to: 1404, text: 'فالـ SLM هي الحل.' },
  { from: 1404, to: 1485, text: 'نماذج مصغرة خفيفة وعالية الكفاءة.' },
  { from: 1485, to: 1524, text: 'وأخيراً،' },
  { from: 1524, to: 1575, text: 'نماذج الـ MLM،' },
  { from: 1575, to: 1650, text: 'التي تفهم سياق الجملة من كلا الاتجاهين.' },
  { from: 1650, to: 1740, text: 'ونموذج SAM الثوري،' },
  { from: 1740, to: 1830, text: 'الذي يحدد ويعزل أي عنصر في أي صورة' },
  { from: 1830, to: 1890, text: 'بدقة جراحية.' },
  { from: 1890, to: 1950, text: 'ثمانية عقول ذكية،' },
  { from: 1950, to: 2040, text: 'كل منها صمم لتغيير قواعد اللعبة.' },
  { from: 2040, to: 2100, text: 'احفظ الفيديو، وشاركنا في التعليقات:' },
  { from: 2100, to: 2160, text: 'أي نموذج ترى أنه الأهم؟' },
]
