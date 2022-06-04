import axios from 'axios'

axios.get('https://mall.api.epet.com/v3/index/home.html?pet_type=cat&version=596&is_single=0&isWeb=1&system=wap').
    then((res) => {
        console.log(res)
    }, (err) => {
        console.log(err)
    })
