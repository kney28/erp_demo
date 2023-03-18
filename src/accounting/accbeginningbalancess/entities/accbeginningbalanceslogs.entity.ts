import { BaseEntity } from 'src/base/baseEntity'; 
import { User } from 'src/users/entities/user.entity'; 
import { Column, Entity, ManyToOne } from 'typeorm'; 

export enum LogAccbeginningbalancesType { 
	CREATE = 'create', 
	UPDATE = 'update', 
	DELETE = 'delete', 
} 

@Entity() 
export class AccbeginningbalancesLogs extends BaseEntity { 
	@Column() 
	value: string; 

	@Column({ 
		type: 'enum', 
		enum: LogAccbeginningbalancesType, 
	}) 
	type: LogAccbeginningbalancesType; 

	@ManyToOne(() => User, (user: User) => user) 
	user: User; 
} 
