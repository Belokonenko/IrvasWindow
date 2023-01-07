import checkNumIputs from "./checkNumInput";

const changeModalState = (state) => {
    
    const windowForm    = document.querySelectorAll('.balcon_icons_img');
    const windowWidth   = document.querySelectorAll('#width');
    const windowHeight  = document.querySelectorAll('#height');
    const windowType    = document.querySelectorAll('#view_type');
    const windowProfile = document.querySelectorAll('.checkbox');

    checkNumIputs('#width');
    checkNumIputs('#height');

    bindActionToElements('click', windowForm, 'form');
    bindActionToElements('input', windowWidth , 'width');
    bindActionToElements('input', windowHeight, 'height');
    bindActionToElements('change', windowType, 'type');
    bindActionToElements('change', windowProfile, 'profile');

    function bindActionToElements(event, elem, prop) {
        elem.forEach((item, i) => {
            item.addEventListener(event, () => {
                switch(item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if (item.getAttribute('type') === 'checkbox') {
                            i === 0 ? state[prop] = 'холодное' : state[prop] = 'теплое';
                            
                            elem.forEach((box, j) => {
                                box.checked = false;
                                
                                if (i == j) {
                                    box.checked = true;
                                }
                            })
                        } else {
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                            state[prop] = item.value;
                        break;
                }
                
                console.log(state);
            }) 
        });
    }

};

export default changeModalState;
