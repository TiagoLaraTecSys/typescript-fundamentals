import { NegociacaoController } from './controllers/NegociacaoController';

const controller = new NegociacaoController();
alert('Olá mundo')
$('.form').submit(controller.adiciona.bind(controller))
