import { format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export function formatDate(date: string, template = 'd MMM y') {
  return format(new Date(date), template, {
    locale: ptBR,
  });
}
