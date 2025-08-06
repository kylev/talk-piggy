export interface Speaker {
  id: string
  name: string
  speakingSeconds: number
  isSpeaking: boolean
}

export interface PrimaryStore {
  speakers: Speaker[]
  tickSeconds: number
  tickTimer?: number
  tickLast: Date
  crosstalkSeconds: number
}
