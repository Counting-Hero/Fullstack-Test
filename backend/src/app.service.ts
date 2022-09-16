import { Injectable } from '@nestjs/common';

const users = [
  {
    email: 'john@counting.com',
    name: 'John Deere',
    company: 'Counting Hero',
    role: 'inspector',
    id: 0,
    avatar: 'https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg?w=1800&t=st=1663316815~exp=1663317415~hmac=bd2c35d288880c082b9f58c8a0fc6e8fa6dec3aafb79244d3ff6b71d5db0013a',
  },
  {
    email: 'jane@counting.com',
    name: 'Jane Doe',
    company: 'Counting Villain',
    role: 'controller',
    id: 1,
    avatar: 'https://img.freepik.com/free-vector/mysterious-mafia-man-smoking-cigarette_52683-34828.jpg?w=1800&t=st=1663316831~exp=1663317431~hmac=2407db53aa311ed18b934c99ea2bdcca970c6af640bbe197c510ffcf2621479d',
  },
  {
    email: 'joe@counting.com',
    name: 'Joe Doe',
    company: 'Counting Villain',
    role: 'admin',
    id: 2,
    avatar: 'https://img.freepik.com/free-vector/businessman-character-avatar-isolated_24877-60111.jpg?w=1800&t=st=1663316922~exp=1663317522~hmac=93af4e06e4d0eaa2df6356f0db2f6fc2d2f2defd359e15fa4834031354c018bf',
  },
  {
    email: 'super@counting.com',
    name: 'Super Man',
    company: 'Counting Hero',
    role: 'owner',
    id: 3,
    avatar: 'https://freevector-images.s3.amazonaws.com/uploads/vector/preview/33178/VectorSuperman.jpg',
  },
  {
    email: 'cdrac@counting.com',
    name: 'Count Dracula',
    company: 'Counting Draculas',
    role: 'counter',
    id: 4,
    avatar: 'https://i.pinimg.com/564x/bf/56/c8/bf56c897634f9f870ee85d591ef4cdc6--sesamestreet-org-count-dracula.jpg',
  },
]

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getUsers(): object[] {
    return [];
  }
}
