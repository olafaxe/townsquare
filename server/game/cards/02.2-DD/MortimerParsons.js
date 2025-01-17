const DudeCard = require('../../dudecard.js');

class MortimerParsons extends DudeCard {
    setupCardAbilities() {
        this.traitReaction({
            when: {
                onDrawHandsRevealed: event => event.shootout && this.isParticipating() && this.controller.isCheatin()
            },
            message: context =>
                this.game.addMessage('{0}\'s cheatin\' hand sends {1} home booted and reduces his influence to 0', context.player, this),
            handler: () => {
                if(this.influence > 0) {
                    this.untilEndOfRound(ability => ({
                        match: this,
                        effect: ability.effects.setInfluence(0)
                    }));
                }
                this.game.shootout.sendHome(this);
                if(this.game.shootout.checkEndCondition()) {
                    this.game.shootout.cancelStep();
                }
            }
        });
    }
}

MortimerParsons.code = '03003';

module.exports = MortimerParsons;
