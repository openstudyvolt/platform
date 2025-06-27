from crewai import Agent, Task, Crew, Process

ui_designer = Agent(
    role='UI Designer',
    goal='Create intuitive website layouts',
    backstory='Expert at crafting user-friendly interfaces.'
)

web_dev = Agent(
    role='Web Developer',
    goal='Build responsive and accessible sites',
    backstory='Experienced full‑stack developer.'
)

task_design = Task(
    description='Design website wireframes and user experience.',
    expected_output='Approved wireframes and design notes.',
    agent=ui_designer
)

task_build = Task(
    description='Implement the website based on approved designs.',
    expected_output='Deployed website implementation.',
    agent=web_dev
)

crew = Crew(
    agents=[ui_designer, web_dev],
    tasks=[task_design, task_build],
    process=Process.sequential
)

if __name__ == '__main__':
    print(crew.kickoff())
