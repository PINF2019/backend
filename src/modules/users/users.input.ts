import { Field, InputType } from 'type-graphql'

@InputType()
export class UserInput {
  @Field()
  uid: string

  @Field()
  firstName: string

  @Field()
  lastName: string
}