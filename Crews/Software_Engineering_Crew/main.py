from crewai import Agent, Task, Crew, Process

architect = Agent(
    role='Architect',
    goal='Design scalable software architecture',
    backstory='Seasoned engineer designing reliable systems.'
)

coder = Agent(
    role='Engineer',
    goal='Implement architecture effectively',
    backstory='Writes maintainable and tested code.'
)

task_design = Task(
    description='Plan the software architecture for the project.',
    expected_output='High level design document.',
    agent=architect
)

task_implement = Task(
    description='Develop code based on the design.',
    expected_output='Implementation of the architecture.',
    agent=coder
)

crew = Crew(
    agents=[architect, coder],
    tasks=[task_design, task_implement],
    process=Process.sequential
)

if __name__ == '__main__':
    print(crew.kickoff())
