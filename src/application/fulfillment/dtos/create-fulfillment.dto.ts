import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsInt, IsNotEmpty, IsNumberString, IsOptional, IsString, Length } from 'class-validator';

export class CreateFulfillmentDTO {
  @ApiProperty({ type: String, description: '풀필먼트 센터 이름' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ type: String, description: '플랜트 코드' })
  @IsNumberString()
  @Length(5, 5)
  @IsNotEmpty()
  plantCode: string;

  @ApiPropertyOptional({ type: String, description: '우편번호' })
  @IsNumberString()
  @Length(5, 6)
  @IsOptional()
  zipCode?: string;

  @ApiPropertyOptional({ type: String, description: '주소' })
  @IsString()
  @IsOptional()
  address?: string;

  @ApiPropertyOptional({ type: String, description: '상세주소' })
  @IsString()
  @IsOptional()
  addressDetail?: string;

  @ApiPropertyOptional({ type: Number, description: '기본 택배사 PK' })
  @IsInt()
  @IsOptional()
  defaultDeliveryCompanyId?: number;
}
