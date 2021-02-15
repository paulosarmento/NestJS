import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateHolidayDto } from './dto/create-holiday.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { HolidayRepository } from './holiday.repository';
import { Holiday } from './holiday.entity';

@Injectable()
export class HolidaysService {
  constructor(
    @InjectRepository(HolidayRepository)
    private holidayRepository: HolidayRepository,
  ) {}

  async createHoliday(createHolidayDto: CreateHolidayDto): Promise<Holiday> {
    return this.holidayRepository.createHoliday(createHolidayDto);
  }

  async getHolidayById(id: number): Promise<Holiday> {
    const found = await this.holidayRepository.findOne(id);

    if (!found) {
      throw new NotFoundException(`Holiday ${id} not found`);
    }

    return found;
  }
  async deleteHoliday(id: number): Promise<void> {
    const result = await this.holidayRepository.delete(id);
    console.log(result);
  }
  async updateHoliday(id: number, name: string, date: Date): Promise<Holiday> {
    const holiday = await this.getHolidayById(id);
    holiday.name = name;
    holiday.date = date;

    await holiday.save();
    return holiday;
  }
}
