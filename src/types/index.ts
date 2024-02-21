export interface IUser {
  image: string
  name: string
  username: string
}

export interface ISuggestion {
  id: number
  title: string
  category: 'enhancement' | 'feature' | 'bug'
  upvotes: number
  isUpvoted: boolean
  status: 'suggestion' | 'planned' | 'in-progress' | 'live'
  description: string
  comments?: IComment[]
}

export interface IComment {
  id: number
  content: string
  user: IUser
  replies?: IReply[]
}

export interface IReply {
  id: number
  content: string
  replyingTo: string
  user: IUser
}

export interface IStatus {
  status: ISuggestion['status']
  name: string
  label: string
  color: string
  amount: number
}
