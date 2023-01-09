import { BaseEntity } from 'src/base/baseEntity';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne } from 'typeorm';

export enum LogDetaiCopaysAndFeesType {
  CREATE = 'create',
  UPDATE = 'update',
  DELETE = 'delete',
}

@Entity()
export class DetailCopaysAndFeesLogs extends BaseEntity {
  @Column()
  value: string;

  @Column({
    type: 'enum',
    enum: LogDetaiCopaysAndFeesType,
  })
  type: LogDetaiCopaysAndFeesType;

  @ManyToOne(() => User, (user: User) => user)
  user: User;
}
