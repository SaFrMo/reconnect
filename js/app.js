new Vue({
    el: '#app',
    data: {
        sourceUrl: '',
        targetUrl: '',
        sourceForkUrl: '',
        diff: null
    },
    methods: {
        async selectSource(){
            const source = await DatArchive.selectArchive({
                title: 'Choose the source of the changes',
                buttonLabel: 'Use this source'
            })
            if( source ){
                this.sourceUrl = source.url
            }

            if( sourceUrl && targetUrl ){
                this.updateDiff(sourceUrl, targetUrl)
            }
        },

        async selectTarget(){
            const target = await DatArchive.selectArchive({
                title: 'Choose where to apply the changes',
                buttonLabel: 'Use this target',
                filters: { isOwner: true }
            })
            if( target ){
                this.targetUrl = target.url
            }

            if( sourceUrl && targetUrl ){
                this.updateDiff(sourceUrl, targetUrl)
            }
        },

        updateDiff(){

        }
    }
})
