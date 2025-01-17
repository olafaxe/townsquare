const DudeCard = require('../../dudecard.js');

class AllieHensman extends DudeCard {
    setupCardAbilities(ability) {
        this.action({
            title: 'Allie Hensman',
            playType: 'noon',
            cost: ability.costs.bootSelf(),
            ifCondition: () => this.isInTownSquare(),
            ifFailMessage: context =>
                this.game.addMessage('{0} uses {1} but does not gain any control point because she is not in Town Square', context.player, this),
            message: context => this.game.addMessage('{0} uses {1} to gain permanent control point', context.player, this),
            handler: () => {
                this.modifyControl(1);
            }
        });
    }
}

AllieHensman.code = '01035';

module.exports = AllieHensman;
