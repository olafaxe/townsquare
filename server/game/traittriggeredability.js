const TriggeredAbility = require('./triggeredability.js');

/**
 * Represents a forced reaction ability provided by card text.
 *
 * Properties:
 * when    - object whose keys are event names to listen to for the reaction and
 *           whose values are functions that return a boolean about whether to
 *           trigger the reaction when that event is fired. For example, to
 *           trigger only at the end of the shootout phase, you would do:
 *           when: {
 *               onPhaseEnded: event => event.phase === 'shootout'
 *           }
 *           Multiple events may be specified for cards that have multiple
 *           possible triggers for the same reaction.
 * handler - function that will be executed if the player chooses 'Yes' when
 *           asked to trigger the reaction. If the reaction has more than one
 *           choice, use the choices sub object instead.
 * limit   - the max number of uses for the repeatable reaction.
 * location - string or array of string  indicating the location the card should
 *            be in in order to activate the reaction. Defaults to 'play area'.
 */
class TraitTriggeredAbility extends TriggeredAbility {
    isForcedAbility() {
        return true;
    }
}

module.exports = TraitTriggeredAbility;
