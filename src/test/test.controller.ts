import {
  Controller,
  Res,
  Query,
  Get,
  HttpStatus,
  Post,
  Body,
  Param,
  NotFoundException,
  Put,
  Delete,
} from '@nestjs/common';
import { TestService } from './test.service';
import { ApiQuery } from '@nestjs/swagger';
import { CreateTestDTO } from './dto/test.dto';
@Controller('test')
export class TestController {
  constructor(private readonly TestService: TestService) {}
  @Post('/create')
  async addCustomer(@Res() res, @Body() CreateTestDTO: CreateTestDTO) {
    const lists = await this.TestService.create(CreateTestDTO);
    return res.status(HttpStatus.OK).json({
      message: 'Post has been created successfully',
      lists,
    });
  }
  @Get('all')
  async findAll(@Res() res) {
    const lists = await this.TestService.findAll();
    return res.status(HttpStatus.OK).json(lists);
  }
  @Get('id')
  async findById(@Res() res, @Query('id') id: string) {
    const lists = await this.TestService.findById(id);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json(lists);
  }
  @Put('/update')
  async update(
    @Res() res,
    @Query('id') id: string,
    @Body() CreateTestDTO: CreateTestDTO,
  ) {
    const lists = await this.TestService.update(id, CreateTestDTO);
    if (!lists) throw new NotFoundException('Id does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been successfully updated',
      lists,
    });
  }
  @Delete('/delete')
  async delete(@Res() res, @Query('id') id: string) {
    const lists = await this.TestService.delete(id);
    if (!lists) throw new NotFoundException('Post does not exist');
    return res.status(HttpStatus.OK).json({
      message: 'Post has been deleted',
      lists,
    });
  }
}
