import { Field, ID, ObjectType, registerEnumType } from 'type-graphql';
import { BaseEntity, Entity, PrimaryGeneratedColumn } from 'typeorm';
export enum UserRole {
    ADMIN = "ADMIN",
    USER = "USER"
}

registerEnumType(UserRole, { name: 'UserRole' });

@ObjectType() // this is the graphql type
@Entity()
export class User extends BaseEntity {

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column({ unique: true })
    email: string;

    @Column()
    password: string;

    @Field()
    @Column({
        type: 'text',
        default: UserRole.USER
    })
    role: UserRole;
}