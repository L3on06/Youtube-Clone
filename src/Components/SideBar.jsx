import { Stack } from "@mui/material"
import { categories } from "../Utils/Constants"

const selecedCategory = "New"

const SideBar = () => (
    <Stack
        direction="row"
        sx={{
            overFlowY: "auto",
            height: { sm: "auto", md: "95%" },
            flexDirection: {md: 'column'},
        }}
    >
        {categories.map((category) => (
            <button className="category-btn"
                key={category.name}
                style={{
                    background: category.name === selecedCategory && "#FC1503",
                    color: "white"
            }}
            >
                <span style={{
                    color: category.name === selecedCategory ? "white" : "red",
                    marginRight: "15px"}}>
                    {category.icon}</span>
                <span style={{
                    opacity: category.name === selecedCategory ? "1" : "0.8"}}>
                    {category.name}</span>
    </button>
))}
    </Stack>
)

export default SideBar;
