# factory-bem-class

## Install

    yarn add factory-bem-class

## Example

```javascript
import {factoryBemClass} from 'factory-bem-class';

const cn = factoryBemClass('block');

cn();
//=> 'block';

cn('element');
cn({el: 'element'});
//=> 'block__element';

cn('element', 'modifier1');
cn('element', {modifier1: true});
cn('element', {modifier1: true, modifier2: false});
cn({el: 'element', mods: 'modifier1'});
cn({el: 'element', mods: {modifier1: true}});
cn({el: 'element', mods: {modifier1: true, modifier2: false}});
cn({el: 'element', modifier1: true});
cn({el: 'element', modifier1: true, modifier2: false});
//=> 'block__element block__element--modifier1';

cn('element', ['modifier1', 'modifier2']);
cn('element', {modifier1: true, modifier2: true});
cn({el: 'element', mods: ['modifier1', 'modifier2']});
cn({el: 'element', mods: {modifier1: true, modifier2: true}});
cn({el: 'element', modifier1: true, modifier2: true});
//=> 'block__element block__element--modifier1 block__element--modifier2';

cn(null, 'modifier1');
cn(null, {modifier1: true});
cn(null, {modifier1: true, modifier2: false});
cn({mods: 'modifier1'});
cn({mods: {modifier1: true}});
cn({mods: {modifier1: true, modifier2: false}});
cn({modifier1: true});
cn({modifier1: true, modifier2: false});
//=> 'block block--modifier1';

cn(null, ['modifier1', 'modifier2']);
cn(null, {modifier1: true, modifier2: true});
cn({mods: ['modifier1', 'modifier2']});
cn({mods: {modifier1: true, modifier2: true}});
cn({modifier1: true, modifier2: true});
//=> 'block block--modifier1 block--modifier2';
```

## BEM Rule References

- [BEM Introduction](http://getbem.com/introduction/) - getbem.com
- [BEM by Example](https://seesparkbox.com/foundry/bem_by_example) - seesparkbox.com

## License

MIT License
