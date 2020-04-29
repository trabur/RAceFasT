// @ts-nocheck
import * as  ht from 'metaheap'

let id = '1' // license plate
let network = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" // road
let address = ht.secret(26, network)
// --with--
ht.move(id, address).beep()
ht.auto.new(id, { address: address })

// const { Socket } = require('phoenix-channels')

// let socket = new Socket("wss://simple.fleetgrid.com/socket")
 
// socket.connect()
 
// // Now that you are connected, you can join channels with a topic:
// let channel = socket.channel("room:lobby", {})
// channel.join()
//   .receive("ok", resp => { console.log("Joined successfully", resp) })
//   .receive("error", resp => { console.log("Unable to join", resp) })