import { getManager, Repository } from "typeorm";
import { validate, ValidationError } from "class-validator";
import { BadRequest } from "http-errors";

import { IMessageBody } from "ts/body";
import { BadValidationRequest } from "ts/error";
import { Message } from "model";

export class MessageDbService {
   public static async selectList(number: number): Promise<Message[]> {
      const messageRepository: Repository<Message> = getManager().getRepository(Message);
      const messages = await messageRepository.find();
      return messages;
   }
   public static async selectById(id: string): Promise<Message> {
      const messageRepository: Repository<Message> = getManager().getRepository(Message);
      const message = await messageRepository.findOne(id);
      if (!message) {
         const err = new BadRequest("not found");
         throw err;
      }
      return message;
   }
   public static async insert(body: IMessageBody): Promise<Message> {
      const messageRepository: Repository<Message> = getManager().getRepository(Message);

      const message = new Message();
      message.author = body.author;
      message.email = body.email;
      message.text = body.text;
      message.createdAt = new Date();
      message.updatedAt = new Date();

      const errors: ValidationError[] = await validate(message);
      if (errors.length > 0) {
         const err = new BadValidationRequest(errors);
         throw err;
      } else {
         const saved = await messageRepository.save(message);
         return saved;
      }
   }

   public static async update(id: string, body: IMessageBody): Promise<Message> {
      // need find message fo update
      const messageRepository: Repository<Message> = getManager().getRepository(Message);
      const before = await messageRepository.findOne(id);
      if (!before) {
         // there is not message this input id
         const error = new BadRequest("not found");
         throw error;
      } else {
         // message exists, create new instance for saving
         const message = new Message();
         message.id = before.id;
         message.author = body.author;
         message.text = body.text;
         message.email = body.email;
         message.createdAt = before.createdAt;
         message.updatedAt = new Date();

         // validate input body...
         const errors: ValidationError[] = await validate(message);
         if (errors.length > 0) {
            const err = new BadValidationRequest(errors);
            throw err;
         } else {
            const after = await messageRepository.save(message);
            return after;
         }
      }
   }
   public static async del(id: string): Promise<Message> {
      const messageRepository: Repository<Message> = getManager().getRepository(Message);
      const message = await messageRepository.findOne(id);
      if (!message) {
         const err = new BadRequest("not found");
         throw err;
      } else {
         const deleted = await messageRepository.remove(message);
         return deleted;
      }
   }
}
