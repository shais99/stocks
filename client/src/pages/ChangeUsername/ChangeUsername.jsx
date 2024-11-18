import {Flex, Input} from "../../components";
import {observer} from "mobx-react-lite";
import userStore from "../../store/userStore";

export const ChangeUsername = observer(() => {

    const handleChange = e => {
        const username = e.target.value

        userStore.setUser(username)

        window.localStorage.setItem('user', username)
    }

    return (
        <Flex gap={16} vertical={true} style={{ padding: 24 }}>
            <Input
                placeholder="Username"
                onChange={handleChange}
                value={userStore.user}
            />
        </Flex>
    )
})