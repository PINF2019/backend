import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypegooseModule } from 'nestjs-typegoose'
import { AuthModule } from './auth/auth.module'
import { ConfigModule } from './config/config.module'
import { ConfigService } from './config/config.service'
import { UsersModule } from './users/users.module'
import { TypegooseConfigService } from '../common/typegoose-config'
import { PollsModule } from './polls/polls.module'
import { ElectionsModule } from './elections/elections.module'
import { ElectoralProcessModule } from './electoral-process/electoral-process.module'
import { RolesModule } from './roles/roles.module'
import { AnswersModule } from './answers/answers.module'
import { CandidatesModule } from './candidates/candidates.module'
import { AnswersModule } from './answers/answers.module'
import { CensusesModule } from './censuses/censuses.module'

@Module({
  imports: [
    ConfigModule,
    TypegooseModule.forRootAsync({
      useClass: TypegooseConfigService
    }),
    GraphQLModule.forRootAsync({
      useFactory: (configService: ConfigService) => ({
        autoSchemaFile: 'schema.gql',
        context: ({ req }) => ({ req }),
        debug: configService.debug
      }),
      inject: [ConfigService]
    }),
    UsersModule,
    AuthModule,
    PollsModule,
    ElectionsModule,
    ElectoralProcessModule,
    RolesModule,
    AnswersModule,
    CandidatesModule,
    CensusesModule
  ]
})
export class AppModule {}
