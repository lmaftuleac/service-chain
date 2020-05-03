import { ControllerBackbone } from './controller-backbone'
import {
  ControllerInitiator,
  ControllerFunction,
} from './types'

export const controller: ControllerInitiator = (): ControllerFunction => {
  const instance = new ControllerBackbone()
  const controllerFn: ControllerFunction = instance.controller
  controllerFn.promise = instance.promise.bind(instance)
  controllerFn.toMiddleware = instance.toMiddleware.bind(instance)
  controllerFn.beforeAll = instance.beforeAll.bind(instance)
  controllerFn.do = instance.do.bind(instance)
  controllerFn.catch = instance.catch.bind(instance)
  controllerFn.end = instance.end.bind(instance)
  controllerFn.backbone = instance

  return controllerFn
}

controller.setDefaultErrorHandler = ControllerBackbone.setDefaultErrorHandler
