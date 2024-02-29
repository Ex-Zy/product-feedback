import { LEAST_COMMENTS, LEAST_UPVOTES, MOST_COMMENTS, MOST_UPVOTES } from '@/constants'

export interface IUser {
  image: string
  name: string
  username: string
}

export interface ISuggestion {
  id: number
  title: string
  category: string
  upvotes: number
  isUpvoted: boolean
  status: string
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
  user: IUser
  replyingTo: string
}

export interface IStatus {
  status: ISuggestion['status']
  name: string
  label: string
  color: string
  amount: number
}

export type SortBy =
  | typeof MOST_UPVOTES
  | typeof LEAST_UPVOTES
  | typeof MOST_COMMENTS
  | typeof LEAST_COMMENTS

export type FilterType = 'all' | 'enhancement' | 'feature' | 'bug' | 'ui' | 'ux'

export type InputSuggestion = Pick<ISuggestion, 'category' | 'title' | 'description'>

export interface ICategory {
  id: number
  name: string
  label: string
}

export type FeedbackReturnType = Promise<ISuggestion | undefined>
export type SuggestionsReturnType = Promise<ISuggestion[] | undefined>
