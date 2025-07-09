export default defineWebSocketHandler({
	open(_peer) {
		console.log('ws opened')
	},
	close(_peer, _details) {
		console.log('ws closed', _details)
	},
	message(_peer, _message) {
		console.log('ws received message:', _message)
	},
	error(_peer, _error) {
		console.log('ws error:', _error)
	}
})
