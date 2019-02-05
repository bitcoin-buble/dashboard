const { LoomProvider, CryptoUtils, Client, LocalAddress } = require('loom-js')
import { formatToCrypto } from '../utils.js'
import * as Utils from 'web3-utils'

const defaultState = () => {
  return {

  }
}


class ActionCancelledError extends Error {
  constructor(message) {
    super(message)
    this.message = message
    this.name = 'ActionCancelledError'
  }
}

const actionWrapper = (action) => {
  return async function (context, ...args) {

    const { dispatch } = context

    context.dispatch = function wrappedDispatch (...args) {
      // throw new ActionCancelledError()
      return dispatch(...args)
    }

    let ret = action(context, ...args)
    if(!isPromise(ret)) ret = Promise.resolve(ret)
    await ret


  }
}


/* eslint-disable */
export default {
  namespaced: true,
  state: defaultState(),
  getters: {},
  mutations: {
  },
  actions: {
    
  }
}
