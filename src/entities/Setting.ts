import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("settings")
class Setting {
  @PrimaryColumn() //se tiver nome diferente ficaria ({name: "nome"})
  id: string;

  @Column()
  username: string;

  @Column()
  chat: boolean;

  @UpdateDateColumn()
  updated_at: Date;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) { //caso o usuario n tenha id se cria um
      this.id = uuid();
    }
  }
}

export { Setting }