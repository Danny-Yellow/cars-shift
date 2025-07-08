import { declension } from './declension';

export const declensionDays = (value: number) => declension(value, ['день', 'дня', 'дней']);
