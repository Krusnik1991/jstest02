$('.elem').tooltip({
/*     autoOpen: false,
 */    content: 'my content',
    classes: {
        'ui-tooltip': "highlight fosi_custom",
     },
    hide: { effect: "explode", duration: 2000, delay: 1000 }
})

$('#execute').tooltip({
    show: { effect: "blind", duration: 1000, delay: 2000 },
    classes: {
        'ui-tooltip-content': "fosi_custom"
    }
});

