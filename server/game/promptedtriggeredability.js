const TriggeredAbility = require('./triggeredability.js');

/**
 * Represents a reaction ability provided by card text.
 *
 * Properties:
 * when    - object whose keys are event names to listen to for the reaction and
 *           whose values are functions that return a boolean about whether to
 *           trigger the reaction when that event is fired. For example, to
 *           trigger only at the end of the sundown phase, you would do:
 *           when: {
 *               onPhaseEnded: event => event.phase === 'sundown'
 *           }
 *           Multiple events may be specified for cards that have multiple
 *           possible triggers for the same reaction.
 * title   - function that returns the string to be used as the prompt title. If
 *           none provided, then the title will be "Trigger {card name}?".
 * cost    - object or array of objects representing the cost required to be
 *           paid before the action will activate. See Costs.
 * handler - function that will be executed if the player chooses 'Yes' when
 *           asked to trigger the reaction. If the reaction has more than one
 *           choice, use the choices sub object instead.
 * choices - object whose keys are text to prompt the player and whose values
 *           are handlers when the player chooses it from the prompt.
 * limit   - the max number of uses for the repeatable reaction.
 * location - string or array of strings indicating the location the card should
 *            be in in order to activate the reaction. Defaults to 'play area'.
 * player   - optional function that returns which player to prompt for the
 *            ability. By default, the player that controls the card will be
 *            prompted. Used for reactions / interrupts that any player can
 *            trigger.
 * cannotBeCanceled - optional boolean that determines whether an ability can
 *                    be canceled using a cancel interrupt.
 */
class PromptedTriggeredAbility extends TriggeredAbility {
    constructor(game, card, type, properties) {
        super(game, card, type, properties);

        this.title = properties.title;
    }

    getTitle(context) {
        return this.title ? this.title(context) : null;
    }
}

module.exports = PromptedTriggeredAbility;
