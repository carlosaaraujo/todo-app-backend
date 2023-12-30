import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  @ApiProperty()
  id: string;

  @Column({ name: 'first_name', type: 'varchar' })
  @ApiProperty()
  firstName: string;

  @Column({ name: 'last_name', type: 'varchar' })
  @ApiProperty()
  lastName: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  email: string;

  @Column({ type: 'varchar' })
  @ApiProperty()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()
  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  deletedAt: string;
}
