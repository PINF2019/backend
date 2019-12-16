import { Module } from '@nestjs/common'
import { AnswerResolver } from './answers.resolver'
import { AnswersService } from './answers.service'
import { TypegooseModule } from 'nestjs-typegoose'
import { Answer } from './answers.type'
import { ElectionsModule } from '../elections/elections.module'
import { PollsModule } from '../polls/polls.module'

@Module({
  imports: [
    TypegooseModule.forFeature([Answer]),
    ElectionsModule,
    PollsModule],
  providers: [AnswerResolver, AnswersService],
  exports: [AnswersService]
})
export class AnswersModule {}
