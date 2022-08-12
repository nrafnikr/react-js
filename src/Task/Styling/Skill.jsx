import React from "react";

const Skill = () => {
    return (
        <section class="page-section" id="skill">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Skill</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row text-center">
                    <div class="col-md-6">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-hard-skill fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Hard Skill</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                    <div class="col-md-6">
                        <span class="fa-stack fa-4x">
                            <i class="fas fa-circle fa-stack-2x text-primary"></i>
                            <i class="fas fa-soft-skill fa-stack-1x fa-inverse"></i>
                        </span>
                        <h4 class="my-3">Soft Skill</h4>
                        <p class="text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Skill;