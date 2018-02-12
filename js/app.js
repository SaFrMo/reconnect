new Vue({
    el: '#app',
    data: {
        sourceUrl: '',
        targetUrl: '',
        sourceForkUrl: ''
    },
    methods: {
        async selectSource(){
            const source = await DatArchive.selectArchive({
                title: 'Choose the source of the changes',
                buttonLabel: 'Use this source'
            })
            if( source ){
                const info = await source.getInfo()

                this.sourceUrl = source.url

            }

            // if( sourceUrl && targetUrl ){
            //     updateDiff(sourceUrl, targetUrl)
            // }
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

            // if( sourceUrl && targetUrl ){
            //     updateDiff(sourceUrl, targetUrl)
            // }
        }
    }
})
