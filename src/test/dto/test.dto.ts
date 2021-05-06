import { ApiProperty } from '@nestjs/swagger';
export class CreateTestDTO {
  @ApiProperty()
  readonly text: string;
}
