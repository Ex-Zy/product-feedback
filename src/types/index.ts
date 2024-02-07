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
  content: string
  replyingTo: string
  user: IUser
}
