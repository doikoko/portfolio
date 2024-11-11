function anim(element, animName){
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(el => {
            if (el.isIntersecting) el.target.style.animationName = animName
            else el.target.style.animationName = null
        })
    }
    )
    observer.observe(element)
}
export default anim;